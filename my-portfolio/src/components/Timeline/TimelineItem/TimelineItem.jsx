const TimelineItem = ({ date, title, description }) => {
  return (
    <>
      <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-base font-[500] leading-none text-gray-400 dark:text-gray-500">
          {date}
        </time>
        <h3 class="text-md font-[700] text-white dark:text-white">{title}</h3>
        <p class="text-base font-[400] text-white/[0.6] dark:text-gray-400 whitespace-pre-line">
          {description}
        </p>
      </li>
    </>
  );
};
export default TimelineItem;
