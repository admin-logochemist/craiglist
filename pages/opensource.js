import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/opensource.module.css'

export default function opensource() {
  return (
    <>
    <div className={styles.global_header}>
                <a className={styles.header_logo} name="logoLink" href="/">CL</a>

                <nav className={styles.breadcrumbs_container}>

                    <ul className={styles.breadcrumbs}>
                        <li className={styles.crumb}>
                            <p>
                                <a href="/about/">About</a>&nbsp;
                                <span className={styles.breadcrumb_arrow}>&gt;</span>&nbsp;
                            </p>
                        </li>
                        <li className={styles.crumb}>
                            <p>
                                Open Source
                            </p>
                        </li>
                    </ul>
                </nav>
            </div>
            <section className={styles.simple_page_content}>
                <p>craigslist is a big believer in <a href="">open source software</a>, and <a href="//www.craigslist.org/about/thanks">relies</a>&nbsp;on Linux, MySQL, Perl, Apache, Sphinx, Redis, Haraka, and many others.</p>
<p>craigslist (CL) has released the following open source projects:</p>
<p><a href="">CL blob service</a> - a simple HTTP-based, multi-master storage service&nbsp;designed for scale-out and multi-datacenter deployments:</p>
<ul>
<li>multi-master architecture with no single point of failure</li>
<li>scales well for both read and write intensive workloads &nbsp;</li>
<li>tracks TTLs for automatic expiration and purging of blobs &nbsp;&nbsp;</li>
<li>designed for both local and multiple data center replication</li>
<li>pluggable index and storage interface (uses SQLite for index and filesystem&nbsp;for storage by default)</li>
</ul>
<p><a href="">CL image service</a> - large scale image resizing and processing HTTP service:</p>
<ul>
<li>flexible API to choose any quality, size, and center-cropping</li>
<li>automatically handles orientation operations from EXIF data &nbsp;</li>
<li>stores resized images in the blob service (could use other stores)</li>
</ul>
<p><a href="">memcache cluster proxy (MCP)</a> - a high-performance modular clustering HTTP&nbsp;reverse proxy:</p>
<ul>
<li>high-performance event-driven daemon</li>
<li>flexible configuration, easily extensible framework</li>
<li>uses standard memcached memory store for caching &nbsp;&nbsp;</li>
<li>supports PCRE and rule-based traffic routing by URL, headers, and more</li>
<li>tracks health of origin servers, routes around failures</li>
<li>provides configurable URL redirects, rewrites, and real-time header&nbsp;transformations</li>
</ul>
<p>In addition, craigslist contributes code to the following open source projects:</p>
<p><a href="">Haraka</a>:</p>
<ul>
<li>added the smtp_client code that helps support pooled connections for proxy&nbsp;queues</li>
<li>rewrote all of the smtp_proxy and smtp_forward code</li>
<li>major contributions to the test suite</li>
<li>plugin that does strict DNS checking, DNS access control lists</li>
<li>contributions to bannering support</li>
<li>logging infrastructure changes for more robust logging</li>
<li>plugins for aliases, access lists, etc.</li>
</ul>
<p><a href="">Redis</a>:</p>
<ul>
<li>perl-AnyEvent-Redis-Federated: an event-based redis client that implements&nbsp;client-side sharding in Perl</li>
<li>redis_util: s collection of utilities for node-redis</li>
<li>provided support for included config files</li>
</ul>
<p><a href="">Sphinx</a>:</p>
<ul>
<li>provided the original persistent connections implementation</li>
<li>craigslist sponsors useful sphinx feature developments, such as the TRUNCATE&nbsp;INDEX command for real-time sphinx</li>
</ul>
<p>The <a href="">craigslist Charitable Fund</a> supports open source nonprofit organizations including:</p>
<ul>
<li><a href="">Apache Software Foundation</a></li>
<li><a href="">Free Software Foundation</a></li>
<li><a href="">Gnome Foundation</a></li>
<li><a href="">Mozilla Foundation</a></li>
<li><a href="">Open Source Initiative</a></li>
<li><a href="">OpenStreetMap.us</a></li>
<li><a href="">Perl Foundation</a></li>
<li><a href="">PostgreSQL</a></li>
<li><a href="">Python Software Foundation</a></li>
<li><a href="">Software in the Public Interest</a></li>
</ul>
            </section>

            <footer className={styles.footer}>
                <ul className={styles.clfooter}>
                    <li>© 2022 <span className={styles.desktop}>craigslist</span><span className={styles.mobile}>CL</span></li>
                    <li><a href="">help</a></li>
                    <li><a href="">safety</a></li>
                    <li className={styles.desktop}><a href="">privacy</a></li>
                    <li className={styles.desktop}><a href="">feedback</a></li>
                    <li><a href="">terms</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">craigslist app</a></li>
                    <li><a href="">cl is hiring</a></li>
                </ul>
            </footer>
    </>
  )
}
