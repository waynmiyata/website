function WayneVideo() {
  return (
    <section className="mx-6 font-sans mt-10 border-2 border-brand-red">
      <div className="bg-brand-yellow">
        <h3 className="text-2xl font-light bg-brand-red py-2 px-4 text-white">
          Wayne Miyata Surf Legend
        </h3>
        <p className="pt-6 p-4 text-lg font-light leading-snug">
          The pro surfing pioneer Wayne Miyata was one of the stars in the cult
          60's surfing film &ldquo;Endless Summer&rdquo;. Wayne Miyata was also
          a master surfboard designer.
        </p>
        <p className="p-4 pt-0 text-xl leading-relaxed">
          <iframe
            width="100%"
            className="mx-auto my-4 px-10 min-h-96 w-full"
            src="https://www.youtube.com/embed/Sut8A9kqzek?si=OMRNiF7yFRSid95k"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </p>
      </div>
    </section>
  );
}
export default WayneVideo;
