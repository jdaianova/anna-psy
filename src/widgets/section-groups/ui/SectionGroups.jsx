import { useState } from 'react';
import GroupCard from './GroupCard';
import { groupsData } from '../lib/groupsData';
import { Modal } from '../../../shared/ui/modal/Modal';
import ModalContent from '../../../shared/ui/modal-content/ModalContent';

const SectionGroups = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentType, setContentType] = useState("");

  const handleOpenModal = (groupId) => {
    if (groupId === 1) {
      setContentType("groupAdhd"); // для взрослых
    } else if (groupId === 2) {
      setContentType("groupParents"); // для родителей
    }
    setIsOpen(true);
  };

  return (
    <section className="section bg-primary-light">
      <div className="box-in-section gap-8">
        <h2 className="title-in-section">Группы</h2>

        <div className="cards-in-section gap-8 lg:!flex-col">
          {groupsData.map((group) => (
            <GroupCard
              key={group.id}
              title={group.title}
              image={group.image}
              description={group.description}
              startDate={group.startDate}
              onJoin={() => handleOpenModal(group.id)}
            />
          ))}
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent contentType={contentType} onClose={() => setIsOpen(false)} />
      </Modal>
    </section>
  );
};

export default SectionGroups;
