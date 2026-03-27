import { BeforeAfter } from '../before-after-carousel';

export function PoolPatioBeforeAfter() {
  const images: BeforeAfter[] = [
    {
      before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717375156-b4ffceba-7696-4758-9e6d-e151f1ac0230.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzUxNTYtYjRmZmNlYmEtNzY5Ni00NzU4LTllNmQtZTE1MWYxYWMwMjMwLmpwZyIsImlhdCI6MTc3MjcxNzM3NSwiZXhwIjoxODA0MjUzMzc1fQ.D6VMon0JBA1HdoETwtYaLUNy6NafyvyKkG4aP3dtZ68',
      after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717374083-7155ba5a-2c07-4266-9197-2c3742f8656a.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzQwODMtNzE1NWJhNWEtMmMwNy00MjY2LTkxOTctMmMzNzQyZjg2NTZhLmpwZyIsImlhdCI6MTc3MjcxNzM3NCwiZXhwIjoxODA0MjUzMzc0fQ.yp6De8v4O9V7Fon3RxaHdiUVTLBZHMXPsoiAUc9Sw-8',
      title: 'Pool Area Transformation',
      description: 'Removed years of algae buildup and staining from liquid limestone surfaces'
    },
    {
      before: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717376612-e89c3742-9d93-42c2-a397-7c17fbbaca36.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzY2MTItZTg5YzM3NDItOWQ5My00MmMyLWEzOTctN2MxN2ZiYmFjYTM2LndlYnAiLCJpYXQiOjE3NzI3MTczNzYsImV4cCI6MTgwNDI1MzM3Nn0.ElLl16TlIKfkOtW54X42lfpd0A8s_gz6LEtLqTT5KI0',
      after: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717377789-3981545c-9f4b-49f6-ae91-d8fcf6ceaab5.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzc3ODktMzk4MTU0NWMtOWY0Yi00OWY2LWFlOTEtZDhmY2Y2Y2VhYWI1LndlYnAiLCJpYXQiOjE3NzI3MTczNzcsImV4cCI6MTgwNDI1MzM3N30.W1hSjYIUNPA-hIDP9v5im077SZlKD7cPjYi269Tv1_M',
      title: 'Pool Area Restored',
      description: 'Professional cleaning of outdoor patio pavers and entertainment area'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
            Pool & Patio Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we restore outdoor entertainment areas to pristine condition
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {images.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2 gap-2 p-4">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase">Before</span>
                  <img
                    src={item.before}
                    alt={`Before ${item.title}`}
                    className="w-full h-48 object-cover rounded-lg mt-1"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#00d4ff] uppercase">After</span>
                  <img
                    src={item.after}
                    alt={`After ${item.title}`}
                    className="w-full h-48 object-cover rounded-lg mt-1"
                  />
                </div>
              </div>
              <div className="p-4 border-t">
                <h3 className="font-bold text-[#0a1628] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}