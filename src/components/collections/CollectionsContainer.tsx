import { morningCollection } from '@/src/utils/collections-group';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { PageTitle } from '../ui/PageTitle';
import { CollectionMap } from './CollectionMap';

export const CollectionsContainer: FC = () => {
  const {
    query: { name },
  } = useRouter();
  return (
    <div className="pb-10">
      <PageTitle title={name as string} />
      {name === 'Morning Collection' ? (
        <CollectionMap collection={morningCollection} />
      ) : null}
    </div>
  );
};
