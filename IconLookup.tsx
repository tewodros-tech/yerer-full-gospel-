import React from 'react';
import {
  Music,
  Baby,
  Compass,
  HeartHandshake,
  Users,
  Check,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Heart,
  DollarSign,
  Flame,
  BookOpen,
  ChevronRight,
  ChevronDown,
  Play,
  Volume2,
  FileText,
  X,
  Search,
  Share2,
  Clock,
  ArrowRight,
  Lock,
  Plus,
  AlertCircle
} from 'lucide-react';

interface IconLookupProps {
  name: string;
  className?: string;
}

export function IconLookup({ name, className = "h-5 w-5" }: IconLookupProps) {
  switch (name) {
    case 'Music': return <Music className={className} />;
    case 'Baby': return <Baby className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'HeartHandshake': return <HeartHandshake className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Check': return <Check className={className} />;
    case 'Calendar': return <Calendar className={className} />;
    case 'MapPin': return <MapPin className={className} />;
    case 'Phone': return <Phone className={className} />;
    case 'Mail': return <Mail className={className} />;
    case 'Heart': return <Heart className={className} />;
    case 'DollarSign': return <DollarSign className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'ChevronRight': return <ChevronRight className={className} />;
    case 'ChevronDown': return <ChevronDown className={className} />;
    case 'Play': return <Play className={className} />;
    case 'Volume2': return <Volume2 className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'X': return <X className={className} />;
    case 'Search': return <Search className={className} />;
    case 'Share2': return <Share2 className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'ArrowRight': return <ArrowRight className={className} />;
    case 'Lock': return <Lock className={className} />;
    case 'Plus': return <Plus className={className} />;
    case 'AlertCircle': return <AlertCircle className={className} />;
    default: return <Users className={className} />;
  }
}
