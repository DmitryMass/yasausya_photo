import {
  fiveCollection,
  fourCollection,
  morningCollection,
  secondCollection,
  thirdCollection,
} from '@/src/utils/collections-group';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { PageTitle } from '../ui/PageTitle';
import { CollectionMap } from './CollectionMap';

export const CollectionsContainer: FC = () => {
  const {
    query: { name },
  } = useRouter();
  return (
    <div className="pb-10 capitalize">
      <PageTitle title={name as string} />
      {name === 'firstCollection' ? (
        <CollectionMap collection={morningCollection} />
      ) : null}
      {name === 'secondCollection' ? (
        <CollectionMap collection={secondCollection} />
      ) : null}
      {name === 'thirdCollection' ? (
        <CollectionMap collection={thirdCollection} />
      ) : null}
      {name === 'fourthCollection' ? (
        <CollectionMap collection={fourCollection} />
      ) : null}
      {name === 'fifthCollection' ? (
        <CollectionMap collection={fiveCollection} />
      ) : null}
    </div>
  );
};
