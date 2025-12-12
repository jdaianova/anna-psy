import instaColor from '../../../shared/assets/svg/instaColor.svg';
import telegramColor from '../../../shared/assets/svg/telegramColor.svg';
import youtubeColor from '../../../shared/assets/svg/youtubeColor.svg';

import imgInsta from '../../../shared/assets/img/imgInsta.png';
import imgYoutube from '../../../shared/assets/img/imgYoutube.png';

export const contactItems = [
  {
    id: 'youtube',
    title: 'YouTube',
    description: 'На канале я делюсь видео о психологии, нейроотличиях и СДВГ',
    link: 'https://www.youtube.com/@life-incolors',
    button: 'Перейти на канал',
    icon: youtubeColor,
    image: imgYoutube,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    description: 'В Instagram — короткие заметки, вдохновение и ежедневные мысли',
    link: 'https://www.instagram.com/ann_is_telling',
    button: 'Смотреть профиль',
    icon: instaColor,
    image: imgInsta,
  },
  {
    id: 'telegram',
    title: 'Telegram',
    description: 'Есть вопрос? Напишите мне в Telegram — я стараюсь отвечать быстро',
    link: 'https://t.me/Ann_Grt',
    button: 'Написать',
    icon: telegramColor,
  },
];
