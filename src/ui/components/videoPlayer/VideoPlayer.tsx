import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { styles } from './VideoPlayerStyle';



interface VideoPlayerProps {
  videoId: number; // Opcional si ya no necesitas esto
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {

/*   const videoUrl = `https://vimeo.com/${videoId}`;
     const localVideo = require('../../assets/video/artecalentarleche.mp4');
*/
  const localVideo = videoId;
  const [isPaused, setIsPaused] = useState(true);


  return (
    <View style={styles.container}>
      <Video
/*         source={{ uri: videoUrl }}
*/  
        source={localVideo}
        style={styles.video}
        resizeMode="cover"
        paused={isPaused}
        controls={true} 
       />
    </View>
  );
};

export default VideoPlayer;
