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
  // eslint-disable-next-line react/display-name
  const renderLevelItem = (prefix: string, centered?: boolean) => (
    item: React.ReactNode,
    index: number,
  ) => {
    return (
      <div
        key={`level-item-${prefix}-${index}`}
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
          {left.items.map(renderLevelItem('left', left.textCentered))}
        </div>
      )}

      {center &&
        center.items.map(renderLevelItem('center', center.textCentered))}

      {right && (
        <div className="level-right">
          {right.items.map(renderLevelItem('right', right.textCentered))}
        </div>
      )}
    </nav>
  );
};

export default Level;
