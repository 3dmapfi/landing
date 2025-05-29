export const Quote = () => {
  return (
    <section className="relative py-20  overflow-hidden bg-background">
      <div className="relative container mx-auto px-4 text-center z-10">
        <blockquote className="text-2xl italic font-semibold text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
          "The best way to predict the future is to invent it."
        </blockquote>
        <figcaption className="mt-4 text-gray-500 dark:text-gray-400 text-base">
          — Alan Kay, Computer Scientist
        </figcaption>
      </div>
    </section>
  );
};
