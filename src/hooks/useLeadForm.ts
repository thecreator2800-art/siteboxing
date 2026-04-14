import React, { useState } from 'react';

export const useLeadForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');

    if (value.length <= 10) {
      setPhoneNumber(value);
      setPhoneError('');
      setSubmitError('');
      setSubmitSuccess(false);
    }
  };

  const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebsite(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (phoneNumber.length === 0) {
      setPhoneError('Введите номер телефона');
      return;
    }

    if (phoneNumber.length < 10) {
      setPhoneError('Номер должен содержать 10 цифр');
      return;
    }

    if (/^(\d)\1+$/.test(phoneNumber)) {
      setPhoneError('Введите корректный номер');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: phoneNumber, website }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setPhoneNumber('');
      } else {
        setSubmitError(data.error || 'Произошла ошибка при отправке');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Не удалось связаться с сервером. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    phoneNumber,
    website,
    handlePhoneChange,
    handleWebsiteChange,
    handleSubmit,
    isSubmitting,
    phoneError,
    submitError,
    submitSuccess,
  };
};
