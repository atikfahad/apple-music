import Head from 'next/head'
import Image from 'next/image'
import GradientLayout from '../components/gradientLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <GradientLayout
      roundImage="true"
      color="blue" subtitle="profile" title="Atik Fahad" description="15 public playlists"
      image="profile.png">
      <div>Home</div>
    </GradientLayout>
  )
}
