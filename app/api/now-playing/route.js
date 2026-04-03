import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const API_KEY = process.env.LASTFM_API_KEY;
  const USERNAME = process.env.NEXT_PUBLIC_LASTFM_USER;

  if (!API_KEY || !USERNAME) {
    return NextResponse.json(
      { error: 'Missing Last.fm configuration' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`,
      { cache: 'no-store' }
    );

    const data = await response.json();
    const track = data.recenttracks.track[0];

    if (!track) {
      return NextResponse.json({ isPlaying: false });
    }

    const isPlaying = track['@attr'] ? track['@attr'].nowplaying === 'true' : false;
    const title = track.name;
    const artist = track.artist['#text'];
    const album = track.album['#text'];
    const albumArt = track.image.find((img) => img.size === 'large')['#text'];
    const url = track.url;

    return NextResponse.json({
      isPlaying,
      title,
      artist,
      album,
      albumArt,
      url,
    });
  } catch (error) {
    console.error('Last.fm fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch from Last.fm' },
      { status: 500 }
    );
  }
}
