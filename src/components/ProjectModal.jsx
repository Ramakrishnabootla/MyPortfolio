import { useEffect } from 'react'

const ProjectModal = ({ isOpen, project, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="animate-slide-up relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-dark-card to-dark-card/80 border border-accent/20 rounded-2xl shadow-2xl shadow-accent/25"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-b from-dark-card to-dark-card/50 border-b border-accent/20 p-6 md:p-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-goldman font-bold text-gray-100 flex-1 break-words">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-accent/15 hover:text-accent text-accent-light transition-all duration-300"
            aria-label="Close modal"
          >
            <span className="text-2xl font-bold">×</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          <div className="prose prose-invert max-w-none">
            {/* Details - Parse HTML string or render as text */}
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              {project.details && typeof project.details === 'string' ? (
                // If details is a string, render as formatted paragraphs
                project.details.split('\n').filter(line => line.trim()).map((paragraph, idx) => (
                  <p key={idx} className="text-gray-300">
                    {paragraph.trim()}
                  </p>
                ))
              ) : (
                // Default formatted output
                <>
                  <p>
                    <strong>Overview:</strong> {project.description}
                  </p>
                  <p>
                    <strong>Tech Stack:</strong> {project.tech?.join(', ')}
                  </p>
                  <p>
                    <strong>Year:</strong> {project.year}
                  </p>
                </>
              )}
            </div>

            {/* Tech Tags */}
            {project.tech && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent-light hover:bg-accent/20 hover:border-accent transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t border-accent/20 bg-gradient-to-t from-dark-card to-dark-card/50 p-6 md:p-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-accent/15 border border-accent/30 text-accent-light hover:bg-accent hover:text-white hover:border-accent font-goldman transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
