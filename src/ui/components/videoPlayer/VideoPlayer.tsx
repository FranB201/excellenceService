import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { styles } from './VideoPlayerStyle';


const VideoPlayer = ({ videoId }) => {
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`;

  return (
    <View style={styles.container}>
      <WebView
      source={{ uri: vimeoUrl }}
      allowsInlineMediaPlayback={true}
      mediaPlaybackRequiresUserAction={false}
      style={{ width: '100%', height: 300 }} // Asegúrate de tener un alto definido
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true} // Muestra un indicador de carga mientras el contenido de la web se está cargando
      mixedContentMode="compatibility" 
      />
    </View>
  );
};

export default VideoPlayer;
