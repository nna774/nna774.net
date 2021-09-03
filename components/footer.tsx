const none = { display: 'none' };

export const Footer: React.FC = () => (
  <footer>
    <address>
      久我山菜々 (
      <a href='https://twitter.com/nonamea774' rel='me'>
        nonamea774
      </a>
      @nnn77) &lt;
      <a href='mailto:nonamea774@gmail.com' rel='me'>
        nonamea774@gmail.com
      </a>
      &gt;
      <br />
      KeyID:{' '}
      <a href='http://pgp.nic.ad.jp/pks/lookup?op=index&amp;search=0x0C3E3AB2&amp;fingerprint=on'>
        0x0C3E3AB2
      </a>
      <br />
      <a href='https://gist.github.com/nna774/8337711'>
        fingerprint: 674A 287A 21D2 2431 AD8F D328 AEF3 C3C7 0C3E 3AB2
      </a>
    </address>
    <img src='https://nna774.net/hstspng.png' alt='hsts ping' style={none} />
  </footer>
);
