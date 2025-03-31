
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  imageSrc?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  className,
  imageSrc,
}) => {
  return (
    <Card className={cn("overflow-hidden h-full flex flex-col", className)}>
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
        {icon && <div className="mb-2 text-primary">{icon}</div>}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Content can be added here as needed */}
      </CardContent>
      {actionLabel && onAction && (
        <CardFooter className="pt-2">
          <Button onClick={onAction} variant="outline" className="w-full">
            {actionLabel}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default InfoCard;
