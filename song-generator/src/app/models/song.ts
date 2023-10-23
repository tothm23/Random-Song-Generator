export interface Song {
  index: number;
  image: string;
  imageb: string;
  trackId: string;
  name: string;
  artistsIds: string[];
  artistsNames: string[];
  popularity: number;
  hasPreview: boolean;
  release: string;
  duration: number;
}
