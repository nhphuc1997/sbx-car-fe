export default function TabVideo() {
  return (
    <div className="p-4 border">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/Qvk3LWOSewc?si=n_KVvZhZK6XQd-QZ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
}
