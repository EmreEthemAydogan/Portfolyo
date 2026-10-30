/** public/ altındaki gerçek bir görselin yolu, piksel boyutu ve erişilebilir açıklaması. */
export type MediaImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

/** Ay hassasiyetinde tarih: görünen metin ve `<time>` için makine okunur değer. */
export type MonthStamp = {
  label: string;
  dateTime: string;
};
