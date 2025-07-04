const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {/* Optional heading */}
      <p className="text-sm text-center text-zinc-500 mb-2 animate-pulse">
        Messages are loading...
      </p>

      {skeletonMessages.map((_, idx) => (
        <div
          key={idx}
          className={`chat ${idx % 2 === 0 ? "chat-start" : "chat-end"}`}
        >
          {/* Avatar */}
          <div className="chat-image avatar">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <div className="skeleton w-full h-full animate-pulse" />
            </div>
          </div>

          {/* Message Block */}
          <div className="flex flex-col gap-2">
            {/* Name skeleton */}
            <div className="chat-header">
              <div className="skeleton h-4 w-20 rounded animate-pulse" />
            </div>

            {/* Message bubble skeleton with shimmer */}
            <div className="chat-bubble bg-base-300 p-0">
              <div
                className={`skeleton h-5 w-[180px] rounded-md animate-pulse`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
