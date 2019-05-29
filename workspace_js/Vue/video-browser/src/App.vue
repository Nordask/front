<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo" />
      <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import SearchBar from './components/SearchBar';
  import VideoList from './components/VideoList';
  import VideoDetail from './components/VideoDetail';

  const API_KEY = 'AIzaSyD9asIk7HbezNh2Q5Ad3jeRLnuUjKLukQ0';
  export default {
      name: 'App',
      components: {
          //SearchBar: SearchBar
          SearchBar,
          VideoList,
          VideoDetail
      },
      data() {
        return {
          videos: [],
          selectedVideo: null
        };
      },
      methods: {
        onVideoSelect(video) {
          this.selectedVideo = video;
        },
        onTermChange(searchTerm) {
          axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              key: API_KEY,
              type: 'video',
              part: 'snippet',
              q: searchTerm
            }
          }).then(response => this.videos = response.data.items);
        }
      }
  };
</script>
