import { useState, useEffect } from 'react';
import { IoClose, IoArrowBack, IoArrowForward, IoSearch } from 'react-icons/io5';

// Import local images
import imgSession from '../images/gallery_session.png';
import imgPanel from '../images/gallery_panel.png';
import imgGroup from '../images/gallery_group.png';
import imgCampus from '../images/gallery_campus.png';
import imgNetworking from '../images/gallery_networking.png';

const galleryImages = [
  {
    id: 1,
    src: imgSession,
    title: "Workshop Keynote Session",
    category: "sessions",
    description: "Invited speaker presenting cutting-edge research highlights in compiler optimization and static analysis.",
    date: "December 17, 2025"
  },
  {
    id: 2,
    src: imgPanel,
    title: "Panel Discussion on PL Future",
    category: "sessions",
    description: "Academic and industry experts discussing the emerging role of AI and formal verification in modern programming language designs.",
    date: "December 18, 2025"
  },
  {
    id: 3,
    src: imgGroup,
    title: "RHPL Workshop Group Photo",
    category: "networking",
    description: "Diverse assembly of researchers, students, and organizers gathered outside the main venue block.",
    date: "December 18, 2025"
  },
  {
    id: 4,
    src: imgCampus,
    title: "The Innovation Hub Venue",
    category: "campus",
    description: "The state-of-the-art facility hosting the RHPL 2025 conference tracks and workshops.",
    date: "December 17, 2025"
  },
  {
    id: 5,
    src: imgNetworking,
    title: "Coffee & Poster Networking Session",
    category: "networking",
    description: "Attendees and students discussing technical research proposals over coffee during the afternoon break.",
    date: "December 19, 2025"
  }
];

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'sessions', label: 'Sessions & Panels' },
  { id: 'networking', label: 'Networking & Groups' },
  { id: 'campus', label: 'Venue & Campus' }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filtered images list based on category and search query
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = activeCategory === 'all' || image.category === activeCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          image.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle keyboard events in lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock background scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, filteredImages]);

  const openLightbox = (imageIndex) => {
    setLightboxIndex(imageIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction) => {
    if (filteredImages.length === 0) return;
    setLightboxIndex((prevIndex) => {
      const nextIndex = prevIndex + direction;
      if (nextIndex < 0) return filteredImages.length - 1;
      if (nextIndex >= filteredImages.length) return 0;
      return nextIndex;
    });
  };

  const currentImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <div className="bg-gradient-to-b from-[#f4f7fb] to-[#e9eef5] min-h-screen py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-white border border-[#c6c6cd] rounded-xl p-6 md:p-10 shadow-[0_4px_20px_rgba(15,23,42,.05)]">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#c6c6cd] pb-6 mb-8 gap-4">
            <div>
              <h2 className="font-['Libre_Caslon_Text'] text-[32px] font-bold text-black mb-1">
                Workshop Gallery
              </h2>
              <p className="text-[15px] text-[#45464d]">
                Highlights and moments from the Research Highlights in Programming Languages workshop.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative max-w-sm w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <IoSearch className="text-lg" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search photos..."
                className="w-full bg-[#f8fafc] border border-[#d6dbe3] rounded-lg py-2 pl-10 pr-4 text-[15px] text-[#2b3442] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/30 focus:border-[#ea580c] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 border-none bg-transparent"
                >
                  <IoClose className="text-lg" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null); // Reset lightbox references
                }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#ea580c] border-[#ea580c] text-white shadow-[0_2px_8px_rgba(234,88,12,0.25)]'
                    : 'bg-white border-[#d6dbe3] text-[#45464d] hover:bg-[#f8fafc] hover:border-[#cbd5e1] hover:text-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => openLightbox(index)}
                  className="group bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-[#cbd5e1] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col"
                >
                  {/* Image Container with Hover Overlay */}
                  <div className="relative overflow-hidden aspect-video bg-gray-100 flex items-center justify-center">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur-sm text-black font-semibold text-xs py-2 px-4 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        View Full Size
                      </span>
                    </div>
                  </div>

                  {/* Caption Info */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
                        {categories.find(c => c.id === image.category)?.label.split(' ')[0] || image.category}
                      </span>
                      <h3 className="text-[18px] font-bold text-black mt-1 leading-tight group-hover:text-[#cc5500] transition-colors">
                        {image.title}
                      </h3>
                      <p className="text-[14px] text-[#5c5d66] mt-2 leading-relaxed line-clamp-2">
                        {image.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-[12px] text-gray-400">
                      <span>{image.date}</span>
                      <span className="font-semibold text-[#ea580c] group-hover:underline flex items-center gap-1">
                        Open
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#f8fafc] border border-dashed border-[#d6dbe3] rounded-xl">
              <p className="text-[#5c5d66] text-lg">No photos found matching your criteria.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="mt-4 text-[#ea580c] font-semibold text-sm hover:underline border-none bg-transparent"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentImage && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 animate-fade-in"
        >
          {/* Top Bar controls */}
          <div className="flex justify-between items-center w-full max-w-6xl mx-auto py-2 z-10">
            <span className="text-white/60 text-sm">
              {lightboxIndex + 1} of {filteredImages.length}
            </span>
            <button
              onClick={closeLightbox}
              className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all border-none bg-transparent cursor-pointer"
            >
              <IoClose className="text-2xl" />
            </button>
          </div>

          {/* Main Stage (Image + Controls) */}
          <div className="relative flex-grow flex items-center justify-center max-w-6xl mx-auto w-full">
            {/* Left Nav Button */}
            {filteredImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-0 md:left-4 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all border-none cursor-pointer"
              >
                <IoArrowBack className="text-2xl" />
              </button>
            )}

            {/* Photo */}
            <img
              src={currentImage.src}
              alt={currentImage.title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[68vh] max-w-[85vw] md:max-h-[72vh] md:max-w-[70vw] object-contain rounded-lg shadow-2xl select-none"
            />

            {/* Right Nav Button */}
            {filteredImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-0 md:right-4 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all border-none cursor-pointer"
              >
                <IoArrowForward className="text-2xl" />
              </button>
            )}
          </div>

          {/* Caption / Description Info Panel */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl mx-auto bg-white/10 border border-white/10 rounded-xl p-5 mb-4 text-white backdrop-blur-md shadow-lg"
          >
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div className="flex-grow">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff8c00]">
                  {categories.find(c => c.id === currentImage.category)?.label.split(' ')[0] || currentImage.category}
                </span>
                <h4 className="text-[20px] font-bold mt-1 leading-tight text-white">
                  {currentImage.title}
                </h4>
                <p className="text-[14px] text-gray-300 mt-2 leading-relaxed">
                  {currentImage.description}
                </p>
              </div>
              <div className="text-[12px] text-gray-400 shrink-0 md:text-right mt-1">
                <span>Taken: {currentImage.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
