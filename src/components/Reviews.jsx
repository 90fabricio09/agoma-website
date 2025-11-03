import { useState } from 'react';
import '../styles/Reviews.css';
import { reviews as staticReviews, averageRating, totalRatings } from '../data/reviews';

const Reviews = () => {
  // Função para renderizar estrelas
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5 && rating % 1 < 1;
    
    return (
      <div className="reviews__stars">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            );
          } else if (i === fullStars && hasHalfStar) {
            const gradientId = `half-${i}-${Date.now()}`;
            return (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <defs>
                  <linearGradient id={gradientId}>
                    <stop offset="50%" stopColor="currentColor"/>
                    <stop offset="50%" stopColor="transparent" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <polygon 
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" 
                  fill={`url(#${gradientId})`}
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            );
          } else {
            return (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            );
          }
        })}
      </div>
    );
  };

  // Formatar data
  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'há 1 dia';
    if (diffDays < 30) return `há ${diffDays} dias`;
    if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `há ${months} ${months === 1 ? 'mês' : 'meses'}`;
    }
    const years = Math.floor(diffDays / 365);
    return `há ${years} ${years === 1 ? 'ano' : 'anos'}`;
  };

  const hasReviews = staticReviews && staticReviews.length > 0;
  const showRating = averageRating > 0;

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="reviews__wrapper">
          <div className="reviews__header">
            <h2 className="reviews__title">
              O que nossos clientes dizem
            </h2>
            <p className="reviews__subtitle">
              Avaliações reais de clientes no Google
            </p>
          </div>

          {!hasReviews && (
            <div className="reviews__config-message">
              <div className="reviews__config-content">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <h3>Adicione seus reviews</h3>
                <p>
                  Para exibir reviews no site, edite o arquivo:
                  <br />
                  <code>src/data/reviews.js</code>
                </p>
                <p>
                  Copie os reviews do Google Maps e cole no arquivo. 
                  <br />
                  Veja o exemplo dentro do arquivo para entender o formato.
                </p>
                <div className="reviews__help-text">
                  <p><strong>Como adicionar reviews:</strong></p>
                  <ol>
                    <li>Abra o Google Maps e encontre sua empresa</li>
                    <li>Copie os reviews que quer destacar</li>
                    <li>Cole no arquivo <code>src/data/reviews.js</code></li>
                    <li>Salve e recarregue a página</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {hasReviews && (
            <>
              {showRating && (
                <div className="reviews__summary">
                  <div className="reviews__rating">
                    <span className="reviews__rating-number">{averageRating.toFixed(1)}</span>
                    {renderStars(averageRating)}
                    {totalRatings > 0 && (
                      <span className="reviews__rating-count">
                        {totalRatings} {totalRatings === 1 ? 'avaliação' : 'avaliações'}
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="reviews__grid">
                {staticReviews.map((review, index) => (
                  <div key={index} className="reviews__card">
                    <div className="reviews__card-header">
                      <div className="reviews__author">
                        {review.avatar && review.avatar.trim() !== '' ? (
                          <img 
                            src={review.avatar} 
                            alt={review.name || 'Cliente'}
                            className="reviews__author-avatar"
                            onError={(e) => {
                              // Se a imagem falhar, mostra o avatar padrão
                              e.target.style.display = 'none';
                              const fallback = e.target.parentElement.querySelector('.reviews__author-avatar--default');
                              if (fallback) {
                                fallback.style.display = 'flex';
                              }
                            }}
                          />
                        ) : (
                          <div className="reviews__author-avatar reviews__author-avatar--default">
                            {(review.name || 'C')[0].toUpperCase()}
                          </div>
                        )}
                        <div>
                          <p className="reviews__author-name">
                            {review.name || 'Cliente'}
                          </p>
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      {review.date && (
                        <span className="reviews__date">
                          {formatDate(review.date)}
                        </span>
                      )}
                    </div>
                    {review.text && (
                      <p className="reviews__text">{review.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="reviews__footer">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJ50OR1CpZzpQRbW8WJhefv3o"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews__button"
            >
              Avalie-nos no Google
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
