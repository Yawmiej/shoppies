import {
  Card,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonThumbnail,
  TextContainer,
} from '@shopify/polaris';
import React from 'react';

function LoadingSkeleton() {
  const cardArray = ['cardA', 'cardB', 'cardC', 'cardD', 'cardE', 'cardF', 'cardG', 'cardH'];
  return (
    <div className="center-flex">
      <div className="flex-row">
        {cardArray.map((card) => (
          <div className="movie-card" key={card}>
            <Card sectioned>
              <TextContainer>
                <SkeletonThumbnail size="large" />
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines="3" />
                <SkeletonDisplayText size="large" />
              </TextContainer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingSkeleton;
