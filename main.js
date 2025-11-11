document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            if (!question || !answer) {
                return;
            }

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }
                });

                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = `${answer.scrollHeight}px`;
                }
            });
        });
    }

    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const closeButtons = document.querySelectorAll('.close-btn');
    const fullBlogContainers = document.querySelectorAll('.full-blog-container');

    if (readMoreButtons.length && fullBlogContainers.length) {
        readMoreButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                const targetContainer = document.getElementById(targetId);
                if (targetContainer) {
                    targetContainer.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    targetContainer.scrollTo(0, 0);
                }
            });
        });

        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const parentContainer = button.closest('.full-blog-container');
                if (parentContainer) {
                    parentContainer.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                fullBlogContainers.forEach(container => {
                    if (container.style.display === 'block') {
                        container.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                });
            }
        });
    }
});

