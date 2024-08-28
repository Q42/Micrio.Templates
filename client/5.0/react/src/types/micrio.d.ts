import type * as React from 'react';
import type { HTMLMicrioElement } from 'Micrio';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'micr-io': React.DetailedHTMLProps<React.HTMLAttributes<HTMLMicrioElement>, HTMLMicrioElement>;
        }
    }
}