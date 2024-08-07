import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '800px',
    height: '80%',
    maxHeight: '80vh',
    padding: '20px',
    borderRadius: '10px',
    overflowY: 'auto',
  },
};

Modal.setAppElement("#root");

interface Song {
  title: string;
  artist: string;
  year: number;
  lyrics: string;
  video: string;
}

export const HomePage: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentLyrics, setCurrentLyrics] = useState<string | null>(null);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [currentSongTitle, setCurrentSongTitle] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    axios
      .get('./json/songs.json')
      .then((response) => setSongs(response.data))
      .catch((error) => console.error("Error loading songs", error));
  }, []);

  const openModal = (song: Song) => {
    setCurrentLyrics(song.lyrics);
    setCurrentVideo(song.video);
    setCurrentSongTitle(song.title);
    setShowVideo(false); // Default to show lyrics initially
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentLyrics(null);
    setCurrentVideo(null);
    setCurrentSongTitle(null);
  };


  const toggleView = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Music List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-200 border-b">
              <th className="py-3 px-4 text-left text-lg font-medium text-gray-700">
                Song
              </th>
              <th className="py-3 px-4 text-left text-lg font-medium text-gray-700">
                Artist
              </th>
              <th className="py-3 px-4 text-left text-lg font-medium text-gray-700">
                Year
              </th>
              <th className="py-3 px-4 text-left text-lg font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100"
              >
                <td className="py-2 px-4 text-sm text-gray-600">
                  {song.title}
                </td>
                <td className="py-2 px-4 text-sm text-gray-600">
                  {song.artist}
                </td>
                <td className="py-2 px-4 text-sm text-gray-600">
                  {song.year}
                </td>
                <td className="py-2 px-4 text-sm text-gray-600">
                  <button
                    onClick={() => openModal(song)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    title="View Details"
                  >
                    <i className="fas fa-info-circle"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Song Details"
      >
        <h2 className="text-2xl font-bold mb-4">{currentSongTitle}</h2>
        {currentVideo && (
          <div className="mb-4">
            <button
              onClick={toggleView}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
              {showVideo ? "Show Lyrics" : "Show Video"}
            </button>
            {showVideo ? (
              <iframe
                width="100%"
                height="315"
                src={currentVideo}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <pre className="whitespace-pre-wrap text-sm">{currentLyrics}</pre>
            )}
          </div>
        )}
        {!currentVideo && (
          <pre className="whitespace-pre-wrap text-sm">{currentLyrics}</pre>
        )}
        <button
          onClick={closeModal}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};
