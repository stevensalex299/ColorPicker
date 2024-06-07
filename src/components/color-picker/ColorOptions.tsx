interface Color {
  name: string
  hex: string
}

interface ColorGroup {
  name: string
  colors: Color[]
}

const ColorOptions: ColorGroup[] = [
  {
    name: 'Red',
    colors: [
      { name: 'Pastel Red', hex: '#FAA0A0' },
      { name: 'Salmon', hex: '#FA8072' },
      { name: 'Bright Red', hex: '#EE4B2B' },
      { name: 'Cardinal Red', hex: '#C41E3A' },
      { name: 'Burgundy', hex: '#800020' },
    ],
  },
  {
    name: 'Blue',
    colors: [
      { name: 'Light Blue', hex: '#ADD8E6' },
      { name: 'Baby Blue', hex: '#89CFF0' },
      { name: 'Bright Blue', hex: '#0096FF' },
      { name: 'Cobalt Blue', hex: '#0047AB' },
      { name: 'Dark Blue', hex: '#00008B' },
    ],
  },
  {
    name: 'Yellow',
    colors: [
      { name: 'Canary Yellow', hex: '#FFFF8F' },
      { name: 'Icterine', hex: '#FCF55F' },
      { name: 'Bright Yellow', hex: '#FFEA00' },
      { name: 'Citrine', hex: '#E4D00A' },
      { name: 'Goldenrod', hex: '#DAA520' },
    ],
  },
  {
    name: 'Green',
    colors: [
      { name: 'Seafoam Green', hex: '#9FE2BF' },
      { name: 'Mint Green', hex: '#98FB98' },
      { name: 'Grass Green', hex: '#7CFC00' },
      { name: 'Kelly Green', hex: '#4CBB17' },
      { name: 'Hunter Green', hex: '#355E3B' },
    ],
  },
  {
    name: 'Orange',
    colors: [
      { name: 'Light Orange', hex: '#FFD580' },
      { name: 'Mango', hex: '#F4BB44' },
      { name: 'Bright Orange', hex: '#FFAC1C' },
      { name: 'Cadmium Orange', hex: '#F28C28' },
      { name: 'Ochre', hex: '#CC7722' },
    ],
  },
  {
    name: 'Purple',
    colors: [
      { name: 'Light Purple', hex: '#CBC3E3' },
      { name: 'Mauve', hex: '#E0B0FF' },
      { name: 'Bright Purple', hex: '#BF40BF' },
      { name: 'Dark Pink', hex: '#AA336A' },
      { name: 'Byzantium', hex: '#702963' },
    ],
  },
]

export default ColorOptions
