import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { styles } from './VideoPlayerStyle';



const VideoPlayer = ({ videoId }) => {
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: vimeoUrl }}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        style={{ width: '100%', height: 300 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        mixedContentMode="compatibility"
        allowsFullscreenVideo={true}  // Asegúrate de permitir video en pantalla completa
      />
    </View>
  );
};

export default VideoPlayer;
