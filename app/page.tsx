import { GeolocationAPI } from "./_components/GeolocationAPI";
import { MediaCaptureAndStreamAPI } from "./_components/MediaCaptureAndStreamAPI";
import { NotificationAPI } from "./_components/NotificationAPI";
import { WebShareAPI } from "./_components/WebShareAPI";
import { WebSpeechAPI } from "./_components/WebSpeechAPI";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="p-3 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-2">Notification API</div>
        <NotificationAPI />
      </div>
      <div className="p-3 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-2">WebShare API</div>
        <WebShareAPI />
      </div>
      <div className="p-3 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-2">Geolocation API</div>
        <GeolocationAPI />
      </div>
      <div className="p-3 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-2">WebSpeech API</div>
        <WebSpeechAPI />
      </div>
      <div className="p-3 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-2">MediaCaptureAndStream API</div>
        <MediaCaptureAndStreamAPI />
      </div>
    </div>
  );
}
