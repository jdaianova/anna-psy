// SectionGroups.jsx
import GroupCard from './GroupCard';
import { groupsData } from '../lib/groupsData';

const SectionGroups = () => {
  return (
    <section className="section bg-primary-light">
      <div className="box-in-section">
        <h2 className="title-in-section">Группы</h2>
        <div className="cards-in-section">
          {groupsData.map((group, index) => (
            <GroupCard
              key={index}
              title={group.title}
              image={group.image}
              description={group.description}
              startDate={group.startDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionGroups;
