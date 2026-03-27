import { motion } from 'motion/react';
import { Leaf, Droplets, Sprout, AlertCircle } from 'lucide-react';

const contaminants = [
  {
    icon: AlertCircle,
    name: 'Lichen',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    description: 'A composite organism made up of both algae and fungi that form crusty patches in various colors including green, gray, orange, or yellow.',
    damage: 'Over time, lichen can cause permanent damage to roofing material by breaking down the surface.'
  },
  {
    icon: Droplets,
    name: 'Algae',
    color: 'text-green-700',
    bgColor: 'bg-green-100',
    description: 'Typically appears as unsightly black streaks on roof surfaces, feeds on the materials in shingles.',
    damage: 'Retains moisture which accelerates the wear and deterioration of your roof.'
  },
  {
    icon: Sprout,
    name: 'Moss',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    description: 'A water-retaining plant that grows in green clumps or patches, particularly in shady and damp areas.',
    damage: 'Moss can lift tiles, which allows water penetration underneath, leading to leaks and structural damage.'
  },
  {
    icon: Leaf,
    name: 'Fungus',
    color: 'text-gray-700',
    bgColor: 'bg-gray-100',
    description: 'Generally appears as dark spots or stains on your roof surface.',
    damage: 'Fungus breaks down roofing materials over time, which can lead to significant damage if left untreated.'
  },
];

export function RoofContamination() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            Understanding Roof Contamination
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Multiple organisms and biological materials grow and establish themselves on roof surfaces, especially in damp and shaded areas. Identifying these organisms is essential for determining the most effective cleaning method for your roof.
          </p>
          <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6 max-w-3xl mx-auto text-left rounded-r-lg">
            <h3 className="font-semibold text-[#0a1628] mb-2">Why Roof Growth Occurs:</h3>
            <p className="text-gray-700">
              Roof growth occurs due to <strong>moisture from rain, dew, or poor drainage</strong>, combined with <strong>shade from trees or north-facing slopes</strong>. Organic debris like leaves and twigs traps moisture and provides nutrients. Perth's warm, humid climate accelerates growth, while older roofs with worn coatings are particularly vulnerable.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {contaminants.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`${item.bgColor} p-3 rounded-lg flex-shrink-0`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${item.color} mb-2`}>
                    {item.name}
                  </h3>
                  <p className="text-gray-700 mb-3">
                    {item.description}
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r">
                    <p className="text-sm text-red-800">
                      <strong>Damage:</strong> {item.damage}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
