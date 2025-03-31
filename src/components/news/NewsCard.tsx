
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface NewsCardProps {
  title: string;
  summary: string;
  date: string;
  source: string;
  imageSrc?: string;
  url?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  summary,
  date,
  source,
  imageSrc,
  url
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="text-sm text-muted-foreground mb-1">{date} • {source}</div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3">{summary}</p>
      </CardContent>
      {url && (
        <CardFooter className="pt-2">
          <Button variant="outline" className="w-full" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              Read Full Article <ExternalLink size={16} />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default NewsCard;
