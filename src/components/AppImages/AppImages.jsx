import Loader from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

import { useState, useEffect } from 'react';
import galleryApi, { PER_PAGE } from '../../services/galleryApi';

import { WrapperLoader, MyApp } from './AppImages.styled';

import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { Modal } from '../Modal/Modal';

export const App = () => {
  const [imagesList, setImagesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);
  const [numberPage, setNumberPage] = useState(1);
  const [showModal, setShowModal] = useState(null);
  const [imgUrl, setImgUrl] = useState('');
  const [requestStatus, setRequestStatus] = useState('idle');

  useEffect(() => {
    if (!searchQuery) return;
    setRequestStatus('pending');

    galleryApi.fetchGalleryWithQuery(searchQuery, numberPage).then(data => {
      if (data.length === 0 && numberPage === 1) {
        toast.error('Nothing found');
        setRequestStatus('idle');
        return;
      }

      if (data.length === 0 && numberPage > 1) {
        toast.error('End of image list');
        setRequestStatus('idle');
        return;
      }

      setImagesList(prev => [...prev, ...data]);
      setRequestStatus('resolved');
    });
  }, [numberPage, searchQuery]);

  useEffect(() => {
    if (imagesList.length <= PER_PAGE) return;
    handleScroll();
  }, [imagesList]);

  const handleSubmit = searchQueryFromSubmit => {
    if (searchQueryFromSubmit.trim() === '') {
      toast.error('Invalid request');
      return;
    }
    if (searchQueryFromSubmit === searchQuery) {
      toast.error('Repeated request');
      return;
    }

    setNumberPage(1);
    setImagesList([]);
    setSearchQuery(searchQueryFromSubmit);
    return;
  };

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const toggleModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      setShowModal(prev => !prev);
    }
  };

  const handleClickImages = (e, url) => {
    setImgUrl(url);
    toggleModal(e);
  };

  return (
    <MyApp>
      <Searchbar onSubmit={handleSubmit} />
      {imagesList.length && (
        <ImageGallery
          images={imagesList}
          alt={searchQuery}
          handleClick={handleClickImages}
        />
      )}
      {requestStatus === 'pending' && (
        <WrapperLoader>
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        </WrapperLoader>
      )}
      {requestStatus === 'resolved' && (
        <Button onClick={() => setNumberPage(prev => prev + 1)} />
      )}
      {showModal && (
        <Modal alt={searchQuery} url={imgUrl} closeModal={toggleModal} />
      )}
      <Toaster />
    </MyApp>
  );
};
