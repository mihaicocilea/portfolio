import TimelineItem from "./TimelineItem/TimelineItem";

const Timeline = ({ title, timelineList }) => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="font-[700] text-[20px] uppercase text-[#3EBA86] my-5">
          {title}
        </h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-5">
          {timelineList &&
            timelineList.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            ))}
        </ol>
      </div>
    </>
  );
};
export default Timeline;
