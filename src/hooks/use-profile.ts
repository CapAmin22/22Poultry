
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Tables } from '@/integrations/supabase/types';

// Define a type for the profile
type Profile = Tables<'profiles'>;

export function useProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      if (!user) {
        setProfile(null);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const { data, error: fetchError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (fetchError) {
          throw fetchError;
        }

        setProfile(data);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, [user]);

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: new Error('User not authenticated') };

    try {
      const { error: updateError } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);

      if (updateError) {
        throw updateError;
      }

      // Refresh profile data
      const { data, error: fetchError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (fetchError) {
        throw fetchError;
      }

      setProfile(data);
      return { data, error: null };
    } catch (err) {
      console.error('Error updating profile:', err);
      return { error: err instanceof Error ? err : new Error(String(err)) };
    }
  };

  return { profile, isLoading, error, updateProfile };
}
