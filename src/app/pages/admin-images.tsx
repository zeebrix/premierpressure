import { useState, useEffect } from 'react';
import { Upload, Trash2, Image as ImageIcon, Loader2, Check, Copy, GripVertical, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { toast, Toaster } from 'sonner';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ImageMetadata {
  id: string;
  fileName: string;
  category: string;
  description: string;
  uploadedAt: string;
  signedUrl: string;
  originalName: string;
  size: number;
  type: string;
  showInGallery?: boolean;
}

const CATEGORIES = [
  { value: 'driveway', label: 'Driveway Cleaning' },
  { value: 'limestone', label: 'Limestone Cleaning' },
  { value: 'roof', label: 'Roof Cleaning' },
  { value: 'paver', label: 'Paver Cleaning & Sealing' },
  { value: 'window', label: 'Window Cleaning' },
  { value: 'house', label: 'House Washing' },
  { value: 'presale', label: 'Presale Cleaning' },
  { value: 'concrete', label: 'Concrete Cleaning' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'general', label: 'General' },
];

interface GalleryPair {
  id: string;
  beforeImage: ImageMetadata;
  afterImage: ImageMetadata;
  position: number;
}

function SortableImageCard({ image, onDelete, copiedId, onCopyUrl, onToggleGallery, formatFileSize, formatDate }: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: image.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
        isDragging ? 'shadow-2xl ring-2 ring-[#00d4ff] z-50' : ''
      }`}
    >
      <div className="aspect-video bg-gray-100 relative">
        <img
          src={image.signedUrl}
          alt={image.description || image.originalName}
          className="w-full h-full object-cover"
        />
        <div
          {...attributes}
          {...listeners}
          className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm p-2 rounded-lg cursor-grab active:cursor-grabbing hover:bg-white transition-colors"
        >
          <GripVertical className="w-4 h-4 text-gray-600" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">
              {image.originalName}
            </h3>
            {image.description && (
              <p className="text-sm text-gray-600 mt-1">{image.description}</p>
            )}
          </div>
          <button
            onClick={() => onDelete(image.id)}
            className="ml-2 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete image"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
          <span className="px-2 py-1 bg-[#00d4ff]/10 text-[#00d4ff] rounded">
            {CATEGORIES.find(c => c.value === image.category)?.label || image.category}
          </span>
          <span>{formatFileSize(image.size)}</span>
          {image.type.includes('webp') && (
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded font-semibold">
              WebP ✓
            </span>
          )}
          {image.showInGallery && (
            <span className="px-2 py-1 bg-green-500 text-white rounded font-semibold flex items-center gap-1">
              <Eye className="w-3 h-3" />
              Public
            </span>
          )}
        </div>
        <p className="text-xs text-gray-400 mt-2">{formatDate(image.uploadedAt)}</p>
        
        <button
          onClick={() => onCopyUrl(image.id, image.signedUrl)}
          className="mt-3 w-full px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center justify-center"
        >
          {copiedId === image.id ? (
            <>
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              <span>Copy Image URL</span>
            </>
          )}
        </button>

        <button
          onClick={() => onToggleGallery(image.id, image.showInGallery || false)}
          className="mt-3 w-full px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center justify-center"
        >
          {image.showInGallery ? (
            <>
              <Eye className="w-4 h-4 text-green-500 mr-2" />
              <span>Hide from Gallery</span>
            </>
          ) : (
            <>
              <EyeOff className="w-4 h-4 mr-2" />
              <span>Show in Gallery</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function SortablePairCard({ pair, index, formatFileSize, formatDate }: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: pair.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-gray-50 rounded-xl p-6 ${
        isDragging ? 'shadow-2xl ring-2 ring-[#00d4ff] opacity-50' : ''
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <GripVertical className="w-5 h-5 text-gray-600" />
        </div>
        <h3 className="text-lg font-semibold text-[#0a1628]">
          Pair #{index + 1}
        </h3>
        <span className="px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] rounded-full text-sm font-medium">
          {CATEGORIES.find(c => c.value === pair.beforeImage.category)?.label}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 relative">
        {/* Before Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="aspect-video bg-gray-100 relative">
            <img
              src={pair.beforeImage.signedUrl}
              alt="Before"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-[#0a1628] text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
              BEFORE
            </div>
          </div>
          <div className="p-3">
            <p className="text-sm font-medium text-gray-900 truncate">
              {pair.beforeImage.originalName}
            </p>
            {pair.beforeImage.description && (
              <p className="text-xs text-gray-600 mt-1">{pair.beforeImage.description}</p>
            )}
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
              <span>{formatFileSize(pair.beforeImage.size)}</span>
              {pair.beforeImage.type.includes('webp') && (
                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-semibold">
                  WebP
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-[#00d4ff] text-white rounded-full p-3 shadow-lg">
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>

        {/* After Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="aspect-video bg-gray-100 relative">
            <img
              src={pair.afterImage.signedUrl}
              alt="After"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-[#00d4ff] text-[#0a1628] px-3 py-1.5 rounded-lg text-sm font-semibold">
              AFTER
            </div>
          </div>
          <div className="p-3">
            <p className="text-sm font-medium text-gray-900 truncate">
              {pair.afterImage.originalName}
            </p>
            {pair.afterImage.description && (
              <p className="text-xs text-gray-600 mt-1">{pair.afterImage.description}</p>
            )}
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
              <span>{formatFileSize(pair.afterImage.size)}</span>
              {pair.afterImage.type.includes('webp') && (
                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-semibold">
                  WebP
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AdminImagesPage() {
  const [images, setImages] = useState<ImageMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [uploadCategory, setUploadCategory] = useState('general');
  const [uploadDescription, setUploadDescription] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'pairs'>('grid');
  const [galleryPairs, setGalleryPairs] = useState<GalleryPair[]>([]);
  const [migrating, setMigrating] = useState(false);

  const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-bb20e683`;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    loadImages();
  }, [selectedCategory]);

  useEffect(() => {
    if (viewMode === 'pairs') {
      createPairsFromImages();
    }
  }, [images, viewMode]);

  const createPairsFromImages = () => {
    const pairs: GalleryPair[] = [];
    for (let i = 0; i < images.length; i += 2) {
      if (images[i + 1]) {
        pairs.push({
          id: `pair-${i}`,
          beforeImage: images[i],
          afterImage: images[i + 1],
          position: i / 2,
        });
      }
    }
    setGalleryPairs(pairs);
  };

  const saveImageOrder = async (orderedImages: ImageMetadata[]) => {
    try {
      const imageIds = orderedImages.map(img => img.id);
      
      const response = await fetch(`${API_URL}/images/reorder`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageIds }),
      });

      if (!response.ok) {
        throw new Error('Failed to save order');
      }

      console.log('✅ Image order saved successfully');
    } catch (error) {
      console.error('Error saving image order:', error);
      // Show a toast or notification to the user
      toast.error('Failed to save image order. Please try again.');
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    if (viewMode === 'pairs') {
      setGalleryPairs((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const reordered = arrayMove(items, oldIndex, newIndex);
        
        // Flatten pairs back to images and save
        const orderedImages: ImageMetadata[] = [];
        reordered.forEach(pair => {
          orderedImages.push(pair.beforeImage);
          orderedImages.push(pair.afterImage);
        });
        saveImageOrder(orderedImages);
        
        return reordered;
      });
    } else {
      setImages((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const reordered = arrayMove(items, oldIndex, newIndex);
        
        // Save the new order
        saveImageOrder(reordered);
        
        return reordered;
      });
    }
  };

  const loadImages = async () => {
    try {
      setLoading(true);
      const url = selectedCategory === 'all' 
        ? `${API_URL}/images`
        : `${API_URL}/images?category=${selectedCategory}`;
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to load images');
      }

      const data = await response.json();
      setImages(data.images || []);
    } catch (error) {
      console.error('Error loading images:', error);
      alert('Failed to load images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('category', uploadCategory);
        formData.append('description', uploadDescription);

        const response = await fetch(`${API_URL}/images/upload`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: formData,
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Upload failed');
        }
      }

      setUploadDescription('');
      await loadImages();
      toast.success(`Successfully uploaded ${files.length} image(s)!`);
    } catch (error: any) {
      console.error('Error uploading images:', error);
      toast.error(`Failed to upload images: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (imageId: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const response = await fetch(`${API_URL}/images/${imageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete image');
      }

      await loadImages();
      toast.success('Image deleted successfully!');
    } catch (error) {
      console.error('Error deleting image:', error);
      toast.error('Failed to delete image. Please try again.');
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handleCopyUrl = async (imageId: string, url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(imageId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      prompt('Copy this image URL:', url);
    }
  };

  const handleToggleGallery = async (imageId: string, currentState: boolean) => {
    try {
      const response = await fetch(`${API_URL}/images/${imageId}/toggle-gallery`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to toggle gallery visibility');
      }

      const data = await response.json();
      
      // Update the local state
      setImages(prevImages => 
        prevImages.map(img => 
          img.id === imageId 
            ? { ...img, showInGallery: data.showInGallery }
            : img
        )
      );

      toast.success(
        data.showInGallery 
          ? '✓ Image will show in gallery' 
          : 'Image hidden from gallery'
      );
    } catch (error) {
      console.error('Error toggling gallery visibility:', error);
      toast.error('Failed to update gallery visibility');
    }
  };

  const handleMigrateGalleryField = async () => {
    if (!confirm('This will set all existing images without the gallery visibility field to HIDDEN. Continue?')) {
      return;
    }

    setMigrating(true);
    try {
      const response = await fetch(`${API_URL}/images/migrate-gallery-field`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to migrate images');
      }

      const data = await response.json();
      
      toast.success(`Migration complete! Updated ${data.updatedImages} of ${data.totalImages} images.`);
      
      // Reload images to reflect changes
      await loadImages();
    } catch (error) {
      console.error('Error migrating images:', error);
      toast.error('Failed to migrate images');
    } finally {
      setMigrating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#0a1628] mb-2">Image Management</h1>
              <p className="text-gray-600">Upload and manage images for Premier Pressure Solutions WA</p>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex flex-col gap-2">
              <div className="text-xs text-gray-500 text-center md:text-right font-medium">
                Switch View Mode:
              </div>
              <div className="flex gap-2 bg-white rounded-lg shadow-md p-1 border-2 border-[#00d4ff]/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-[#00d4ff] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  📋 Grid View
                </button>
                <button
                  onClick={() => setViewMode('pairs')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    viewMode === 'pairs'
                      ? 'bg-[#00d4ff] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  🔄 Before/After Pairs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Instructions Banner */}
        <div className="bg-white border-l-4 border-[#00d4ff] rounded-lg p-4 mb-8 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#0a1628] mb-2">Quick Guide:</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Grid View:</strong> Arrange individual images by dragging the ⋮⋮ handle</li>
                <li>• <strong>Pairs View:</strong> See before/after pairs and reorder them together</li>
                <li>• <strong>Order saves automatically</strong> when you finish dragging!</li>
                <li>• Upload images in pairs (before, after, before, after) for best results</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#00d4ff]">
            <div className="flex items-center gap-3">
              <ImageIcon className="w-8 h-8 text-[#00d4ff]" />
              <div>
                <p className="text-sm text-gray-600">Total Images</p>
                <p className="text-2xl font-bold text-[#0a1628]">{images.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center gap-3">
              <Eye className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Public Gallery</p>
                <p className="text-2xl font-bold text-green-600">
                  {images.filter(img => img.showInGallery).length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-400">
            <div className="flex items-center gap-3">
              <EyeOff className="w-8 h-8 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Hidden</p>
                <p className="text-2xl font-bold text-gray-600">
                  {images.filter(img => !img.showInGallery).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Migration Warning Banner - Only show if there are images without the showInGallery field */}
        {images.some(img => img.showInGallery === undefined) && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 mb-8 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚠️</div>
              <div className="flex-1">
                <h3 className="font-semibold text-yellow-800 mb-2">Gallery Visibility Migration Required</h3>
                <p className="text-sm text-yellow-700 mb-3">
                  <strong>{images.filter(img => img.showInGallery === undefined).length} images</strong> don't have gallery visibility settings. 
                  Click the button below to set all existing images to HIDDEN by default. 
                  You can then manually enable them individually.
                </p>
                <button
                  onClick={handleMigrateGalleryField}
                  disabled={migrating}
                  className="inline-flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {migrating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Migrating...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Run Migration (Hide {images.filter(img => img.showInGallery === undefined).length} Images)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#0a1628] mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5 text-[#00d4ff]" />
            Upload New Images
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={uploadCategory}
                onChange={(e) => setUploadCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description (e.g., "Perth driveway", "Before", "After")
              </label>
              <input
                type="text"
                value={uploadDescription}
                onChange={(e) => setUploadDescription(e.target.value)}
                placeholder="e.g., Nedlands limestone before"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent"
              />
            </div>
          </div>

          {/* Drag & Drop Area */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              dragActive 
                ? 'border-[#00d4ff] bg-[#00d4ff]/5' 
                : 'border-gray-300 hover:border-[#00d4ff]'
            }`}
          >
            {uploading ? (
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="w-12 h-12 text-[#00d4ff] animate-spin" />
                <p className="text-gray-600">Uploading images...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <ImageIcon className="w-12 h-12 text-gray-400" />
                <p className="text-lg font-medium text-gray-700">
                  Drag and drop images here, or click to select
                </p>
                <p className="text-sm text-gray-500">Supports JPG, PNG, WebP (WebP recommended!)</p>
                <label className="mt-2 cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="hidden"
                    disabled={uploading}
                  />
                  <span className="inline-flex items-center gap-2 bg-[#00d4ff] text-white px-6 py-3 rounded-lg hover:bg-[#00c4ef] transition-colors">
                    <Upload className="w-5 h-5" />
                    Select Files
                  </span>
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-[#0a1628] mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#00d4ff] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({images.length})
            </button>
            {CATEGORIES.map(cat => {
              const count = images.filter(img => img.category === cat.value).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === cat.value
                      ? 'bg-[#00d4ff] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Images Grid or Pairs */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#0a1628]">
              {viewMode === 'grid' 
                ? `Uploaded Images (${filteredImages.length})` 
                : `Before/After Pairs (${galleryPairs.length})`}
            </h2>
            {viewMode === 'pairs' && galleryPairs.length > 0 && (
              <div className="text-sm text-gray-600">
                💡 Drag pairs to reorder them
              </div>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 text-[#00d4ff] animate-spin" />
            </div>
          ) : viewMode === 'grid' ? (
            filteredImages.length === 0 ? (
              <div className="text-center py-12">
                <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No images uploaded yet</p>
              </div>
            ) : (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={filteredImages.map(img => img.id)}
                  strategy={rectSortingStrategy}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((image) => (
                      <SortableImageCard
                        key={image.id}
                        image={image}
                        onDelete={handleDelete}
                        copiedId={copiedId}
                        onCopyUrl={handleCopyUrl}
                        onToggleGallery={handleToggleGallery}
                        formatFileSize={formatFileSize}
                        formatDate={formatDate}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            )
          ) : (
            galleryPairs.length === 0 ? (
              <div className="text-center py-12">
                <div className="bg-gray-50 rounded-xl p-8 max-w-md mx-auto">
                  <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">No pairs available</p>
                  <p className="text-sm text-gray-400">Upload images in pairs (before + after) to see them here</p>
                </div>
              </div>
            ) : (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={galleryPairs.map(pair => pair.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-6">
                    {galleryPairs.map((pair, index) => (
                      <SortablePairCard
                        key={pair.id}
                        pair={pair}
                        index={index}
                        formatFileSize={formatFileSize}
                        formatDate={formatDate}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            )
          )}
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}