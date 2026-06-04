import Image, { type ImageProps } from 'next/image';

type OptimizedImageProps = Omit<ImageProps, 'alt'> & {
  alt: string;
};

/** Wrapper fino em torno de next/image com defaults sensatos */
export default function OptimizedImage({
  quality = 80,
  loading,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      quality={quality}
      loading={loading ?? (props.priority ? undefined : 'lazy')}
      {...props}
    />
  );
}
