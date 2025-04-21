import leaf from '../../../shared/assets/svg/leaf.svg'
import leaves from '../../../shared/assets/svg/leaves.svg'
import pen from '../../../shared/assets/svg/pen.svg'

const openAppointmentModal = () => {
    alert('окно записи будет тут :)')
};

export const buttonsData = [
    {
        icon: leaf,
        label: "Индивидуальные консультации",
        text: "онлайн/очно",
        color: "light",
        onClick: openAppointmentModal,
    },
    {
        icon: leaves,
        label: "Интерактивная группа",
        text: "по СДВГ",
        color: "light",
        onClick: openAppointmentModal,
    },
    {
        icon: pen,
        label: "Запись на консультацию",
        text: "перейти",
        color: "dark",
        onClick: openAppointmentModal,
    },
];
