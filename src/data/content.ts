import {
  Sprout,
  Tractor,
  HeartHandshake,
  Users,
  Leaf,
  Milk,
  Sun,
  Bird,
  TreePine,
  Wind,
  Smile,
  Handshake,
  Apple,
  Wheat,
  Nut,
  type LucideIcon,
} from 'lucide-react';

export type Experience = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const experiences: Experience[] = [
  {
    icon: Sprout,
    title: 'Organic Farming Experience',
    description:
      'Get your hands in the soil and learn sustainable, chemical-free farming from our seasoned farmers — from sowing seeds to harvesting fresh produce.',
    image:
      'https://images.pexels.com/photos/4669531/pexels-photo-4669531.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    alt: 'Aerial view of a cultivated vegetable field',
  },
  {
    icon: Tractor,
    title: 'Guided Farm Tour',
    description:
      'A leisurely walk through our orchards, fields, and barns with an expert guide who shares the story behind every crop and corner of the farm.',
    image:
      'https://images.pexels.com/photos/5078726/pexels-photo-5078726.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    alt: 'Lush green citrus orchard with mountain backdrop',
  },
  {
    icon: HeartHandshake,
    title: 'Animal Feeding',
    description:
      'Meet our friendly cows, sheep, and hens. Feed them, learn how they are cared for, and let the little ones make a new farm friend.',
    image:
      'https://images.pexels.com/photos/1430639/pexels-photo-1430639.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    alt: 'Child feeding hay to a cow at a barn',
  },
  {
    icon: Users,
    title: 'Family & Kids Activities',
    description:
      'Treasure hunts, hay-barn play, nature crafts, and more — designed to give families a joyful, screen-free day surrounded by greenery.',
    image:
      'https://images.pexels.com/photos/9036092/pexels-photo-9036092.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    alt: 'Children playing on a haystack in a field',
  },
];

export type Produce = {
  icon: LucideIcon;
  name: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  badgeTone: 'seasonal' | 'daily';
};

export const seasonalProduce: Produce[] = [
  {
    icon: Apple,
    name: 'Mangoes',
    description:
      'Sweet, sun-ripened mangoes from our heritage orchard — hand-picked at peak season for unmatched flavour and aroma.',
    image:
      'https://images.pexels.com/photos/20568790/pexels-photo-20568790.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Green mangoes hanging on a tree branch',
    badge: 'Seasonal · Apr–Jul',
    badgeTone: 'seasonal',
  },
  {
    icon: Nut,
    name: 'Groundnuts',
    description:
      'Plump, earthy groundnuts grown naturally in our rotation fields — perfect for fresh roasting or cold-pressed oil.',
    image:
      'https://images.pexels.com/photos/9799045/pexels-photo-9799045.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Harvested peanut crops in a field',
    badge: 'Seasonal · Sep–Nov',
    badgeTone: 'seasonal',
  },
];

export const dailyProduce: Produce[] = [
  {
    icon: Bird,
    name: 'Country Hens',
    description:
      'Free-range country hens raised on natural feed — healthy, active, and a lively part of the farm family.',
    image:
      'https://images.pexels.com/photos/32594311/pexels-photo-32594311.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Free-range chicken on a sunny meadow',
    badge: 'Available Daily',
    badgeTone: 'daily',
  },
  {
    icon: Leaf,
    name: 'Sheep',
    description:
      'Our gentle flock grazes openly on green pasture, cared for with attention to their health and comfort year-round.',
    image:
      'https://images.pexels.com/photos/12714450/pexels-photo-12714450.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Sheep grazing in a green pasture',
    badge: 'Available Daily',
    badgeTone: 'daily',
  },
  {
    icon: Wheat,
    name: 'Cows',
    description:
      'Indigenous breed cows raised in clean, open shelters — the heart of our dairy and a favourite with visiting children.',
    image:
      'https://images.pexels.com/photos/33755004/pexels-photo-33755004.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Brown cow grazing on lush green grass',
    badge: 'Available Daily',
    badgeTone: 'daily',
  },
  {
    icon: Milk,
    name: 'Fresh Cow Milk',
    description:
      'Unprocessed, full-cream milk drawn every morning from our grass-fed cows — pure, creamy, and naturally sweet.',
    image:
      'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Glass of fresh milk on a stone ledge',
    badge: 'Available Daily',
    badgeTone: 'daily',
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  { icon: Leaf, title: '100% Natural Environment', description: 'No chemicals, no pollution — just clean air, soil, and water across every acre.' },
  { icon: Milk, title: 'Fresh Farm Products', description: 'Harvest and dairy produced daily, served the way nature intended.' },
  { icon: Users, title: 'Family Friendly', description: 'Safe, engaging spaces and activities crafted for visitors of every age.' },
  { icon: Wind, title: 'Peaceful Atmosphere', description: 'Escape the city noise and unwind in the quiet rhythm of farm life.' },
  { icon: Sprout, title: 'Eco-Friendly Farming', description: 'Sustainable practices that give back more to the land than they take.' },
  { icon: TreePine, title: 'Beautiful Orchards', description: 'Stroll through heritage mango groves and flowering fields that change with the seasons.' },
  { icon: Sun, title: 'Healthy Lifestyle', description: 'Fresh food, open skies, and active days — the recipe for real well-being.' },
  { icon: Smile, title: 'Excellent Hospitality', description: 'Warm hosts, guided experiences, and thoughtful touches from arrival to sunset.' },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  span?: boolean;
};

export const galleryImages: GalleryImage[] = [
  { src: '/farm-entrance-1.jpg', alt: 'Entrance to YAR Farms', category: 'Farm Views', span: true },
  { src: '/farm-entrance-2.jpg', alt: 'Wide view of the farm entrance', category: 'Farm Views' },
  { src: 'https://images.pexels.com/photos/9799037/pexels-photo-9799037.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', alt: 'Freshly harvested groundnuts with roots', category: 'Groundnut Fields' },
  { src: 'https://images.pexels.com/photos/36623833/pexels-photo-36623833.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', alt: 'Sheep grazing in a flower-filled field', category: 'Animals' },
  { src: 'https://images.pexels.com/photos/24896227/pexels-photo-24896227.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', alt: 'Family bonding with a goat on the farm', category: 'Visitors' },
  { src: 'https://images.pexels.com/photos/35383652/pexels-photo-35383652.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop', alt: 'Serene green field under a blue sky', category: 'Nature', span: true },
  { src: 'https://images.pexels.com/photos/27896657/pexels-photo-27896657.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', alt: 'Brown and white cow grazing in pasture', category: 'Animals' },
  { src: 'https://images.pexels.com/photos/7782158/pexels-photo-7782158.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', alt: 'Woman teaching gardening to children', category: 'Visitors' },
];

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Priya & Karthik',
    role: 'Family Visit · Chennai',
    avatar: 'https://images.pexels.com/photos/38670596/pexels-photo-38670596.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    review:
      'Our kids had the most magical day feeding the animals and running through the orchard. The hospitality was warm and genuine — we felt like family, not tourists.',
  },
  {
    name: 'Ananya Rao',
    role: 'Solo Traveller · Bengaluru',
    avatar: 'https://images.pexels.com/photos/7562179/pexels-photo-7562179.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    review:
      'A perfect escape from the city. The guided tour was fascinating, the mangoes were the sweetest I have ever tasted, and the peace here is something I will carry back with me.',
  },
  {
    name: 'Daniel & Mei',
    role: 'Couple · Pondicherry',
    avatar: 'https://images.pexels.com/photos/7562185/pexels-photo-7562185.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    review:
      'We came for a quiet weekend and left with memories for a lifetime. Watching the sunset over the fields with a glass of fresh milk in hand — pure, simple perfection.',
  },
  {
    name: 'The Iyer Family',
    role: 'Group of 12 · Coimbatore',
    avatar: 'https://images.pexels.com/photos/5334146/pexels-photo-5334146.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    review:
      'They accommodated our large group effortlessly. From the farm tour to the kids activities, everything was thoughtfully organised. Already planning our next visit!',
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: 'What are your opening hours?',
    answer: 'YAR Farms is open every day from 8:00 AM to 6:00 PM, including weekends and public holidays. Last entry is at 5:00 PM to give visitors ample time to enjoy the grounds.',
  },
  {
    question: 'Is there an entry fee?',
    answer: 'Day entry is ₹150 per adult and ₹80 per child (under 5 enter free). Guided tours, animal feeding, and family activity packs are available as add-ons. Booking online in advance saves 10%.',
  },
  {
    question: 'Do you have parking on site?',
    answer: 'Yes, we offer free, secure parking for cars and buses right at the farm entrance. Electric vehicle charging points are available as well.',
  },
  {
    question: 'Can we take photographs during our visit?',
    answer: 'Absolutely. Personal photography is encouraged throughout the farm — the orchards and fields make for stunning backdrops. For commercial or pre-wedding shoots, please contact us in advance for a permit.',
  },
  {
    question: 'What is the best season to visit?',
    answer: 'Every season has its charm. April to July is mango harvest season — the orchards are lush and fragrant. September to November is groundnut harvest. The weather is most pleasant from October to February.',
  },
  {
    question: 'Do you accommodate group and school visits?',
    answer: 'Yes, we host school groups, corporate outings, and private celebrations with tailored packages. Please book at least two weeks in advance for groups of 15 or more so we can prepare a personalised experience.',
  },
];

export const stats = [
  { label: 'Acres of Greenery', value: 120, suffix: '+' },
  { label: 'Happy Visitors', value: 15000, suffix: '+' },
  { label: 'Farm Animals', value: 80, suffix: '' },
  { label: 'Years of Farming', value: 25, suffix: '' },
];

export const timeline = [
  { year: '2000', title: 'The Beginning', text: 'Our family acquired a stretch of barren land and began restoring it with native trees and organic soil practices.' },
  { year: '2008', title: 'First Harvest', text: 'Our mango orchard bore its first commercial harvest, marking the start of YAR Farms as a name for quality produce.' },
  { year: '2015', title: 'Opening Our Gates', text: 'We welcomed our first visitors, turning the working farm into a place where families could experience rural life firsthand.' },
  { year: '2024', title: 'A Green Destination', text: 'Today YAR Farms is a trusted eco-tourism destination, hosting thousands of guests while staying true to sustainable roots.' },
];

export const coreValues = [
  { icon: Leaf, title: 'Sustainability', text: 'Farming methods that protect the soil, water, and wildlife for generations to come.' },
  { icon: Handshake, title: 'Authenticity', text: 'Real farming, real food, real people — nothing artificial, nothing staged.' },
  { icon: HeartHandshake, title: 'Hospitality', text: 'Every guest is treated as part of the YAR Farms family from the moment they arrive.' },
  { icon: Sprout, title: 'Stewardship', text: 'We see ourselves as caretakers of the land, not just owners of it.' },
];
