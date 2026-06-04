'use client';

export default function WhatsAppButton() {
  const phoneNumber = '351920601070';
  const text = 'Olá André, gostaria de obter mais informações sobre o Domaine du Vingt-Cinq.';
  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacto direto via WhatsApp com André Queirós"
      title="Fale com André Queirós"
    >
      <span className="whatsapp-tooltip">Fale com André Queirós</span>
      <div className="whatsapp-icon-wrap">
        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.429 0 9.85-4.417 9.853-9.848.002-2.63-1.023-5.101-2.887-6.968C16.375 1.92 13.901 1.9 11.272 1.9c-5.432 0-9.854 4.416-9.856 9.849-.001 1.947.509 3.551 1.487 5.106L1.87 21.087l4.777-1.933zm11.986-7.834c-.267-.134-1.587-.783-1.834-.873-.247-.09-.427-.135-.607.135-.18.27-.697.873-.854 1.053-.158.18-.315.202-.582.067-.267-.134-1.13-.416-2.153-1.328-.795-.71-1.332-1.587-1.488-1.857-.157-.27-.017-.417.118-.552.121-.122.267-.315.4-.473.133-.157.178-.27.266-.45.089-.18.045-.338-.022-.473-.068-.135-.607-1.463-.83-2.003-.218-.527-.459-.455-.63-.464-.162-.008-.347-.01-.53-.01-.183 0-.482.068-.733.338-.25.27-1.587 1.553-1.587 3.78s1.62 4.388 1.845 4.691c.225.304 3.19 4.871 7.729 6.827 1.079.466 1.92.744 2.576.953 1.083.344 2.07.296 2.852.179.87-.13 1.834-.749 2.092-1.439.258-.69.258-1.283.18-1.414-.079-.13-.282-.22-.549-.354z" />
        </svg>
      </div>
    </a>
  );
}
