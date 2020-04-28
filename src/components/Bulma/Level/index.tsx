import React from 'react';
import clsx from 'clsx';

export interface LevelPanel {
  items: React.ReactNode[];
  textCentered?: boolean;
}

export interface LevelProps {
  center?: LevelPanel;
  left?: LevelPanel;
  right?: LevelPanel;
  isMobile?: boolean;
}

const Level: React.FC<LevelProps> = ({ left, center, right, isMobile }) => {
  const renderLevelItem = (centered?: boolean) => (
    item: React.ReactNode,
    index: number,
  ) => {
    return (
      <div
        className={clsx('level-item', {
          ['has-text-centered']: !!centered,
        })}
      >
        {item}
      </div>
    );
  };

  return (
    <nav className={clsx('level', { ['is-mobile']: isMobile })}>
      {left && (
        <div className="level-left">
          {left.items.map(renderLevelItem(left.textCentered))}
        </div>
      )}

      {center && center.items.map(renderLevelItem(center.textCentered))}

      {right && (
        <div className="level-right">
          {right.items.map(renderLevelItem(right.textCentered))}
        </div>
      )}
    </nav>
  );
};

export default Level;
