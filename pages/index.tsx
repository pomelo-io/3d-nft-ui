import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Suspense } from "react";

import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment, OrbitControls } from "@react-three/drei";

const Scene = ({ipfs}: {ipfs: string}) => {
  return (
  <Canvas className={styles.scene}>
    <Model ipfs={ipfs} />
    <OrbitControls autoRotate={false} />
    <Environment preset="city" />
  </Canvas>
  );
}

const Model = ({ipfs}: {ipfs: string}) => {
  const gltf = useLoader(GLTFLoader, `./${ipfs}.gltf`);
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  )
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>3D NFTs</title>
        <meta name="description" content="3D NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          3D NFT
        </h1>

        <p className={styles.description}>
          Get started using <a className={styles.code} href="https://threejs.org">three.js</a>
        </p>

        <div className={styles.grid}>
          <span className={styles.card}>
            <h2>3D Asset &rarr;</h2>
            <Scene ipfs={"QmXWcgFZePsavL9WrdpAAnWLXgw3kb5vqWMzZ7BczmyGri"} />
          </span>

          <span className={styles.card}>
            <h2>3D Asset &rarr;</h2>
            <Scene ipfs={"QmbNoKJZJQWJW2BTzQcP9g3iLMmGiD1eLuWvJ8VN9ge4eG"} />
          </span>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
