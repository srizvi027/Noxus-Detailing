import { brand } from '@/data/content';

/** Badge + wordmark. Used by both the loader and the navbar (so the loader can fly into place). */
export default function Logo({ id, style }) {
  return (
    <div className="logo-lockup" id={id} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={brand.logo} alt="" width="96" height="96" />
      <b>
        NOXUS
        <i>DETAILING</i>
      </b>
    </div>
  );
}
