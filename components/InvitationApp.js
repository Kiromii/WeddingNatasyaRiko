'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Cover from './Cover';
import Hero from './Hero';
import Intro from './Intro';
import CountdownTimer from './CountdownTimer';
import EventDetails from './EventDetails';
import LoveStory from './LoveStory';
import Gallery from './Gallery';
import WishesRSVP from './WishesRSVP';
import GiftSection from './GiftSection';
import Footer from './Footer';
import MusicToggle from './MusicToggle';
import { formatGuestName } from '@/lib/utils';

export default function InvitationApp() {
  const searchParams = useSearchParams();
  const guestName = formatGuestName(searchParams.get('to'));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('lock-scroll', !isOpen);
    return () => document.body.classList.remove('lock-scroll');
  }, [isOpen]);

  return (
    <>
      <Cover guestName={guestName} onOpen={() => setIsOpen(true)} />

      <main>
        <Hero />
        <Intro />
        <CountdownTimer />
        <EventDetails />
        <LoveStory />
        <Gallery />
        <WishesRSVP guestName={guestName} />
        <GiftSection />
        <Footer />
      </main>

      <MusicToggle isOpen={isOpen} />
    </>
  );
}
