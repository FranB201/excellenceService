import React, { useRef } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { styles } from './VideoPlayerStyle';


const VideoPlayer = ({ videoId }) => {
  const webviewRef = useRef(null);
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`;

  return (
 <WebView
        ref={webviewRef}
        source={{ uri: vimeoUrl }}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        scrollEnabled={false}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}

      />

  );
};

export default VideoPlayer;
