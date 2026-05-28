/*
 * Copyright 2026 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { useEntity } from '@backstage/plugin-catalog-react';
import {
  InfoCard,
  EmptyState,
  MissingAnnotationEmptyState,
} from '@backstage/core-components';
import { makeStyles } from '@material-ui/core/styles';

const STRUCTURIZR_ANNOTATION = 'structurizr.com/url';

const useStyles = makeStyles({
  iframe: {
    width: '100%',
    height: 'calc(100vh - 260px)',
    minHeight: 500,
    border: 'none',
  },
});

export function StructurizrContent() {
  const classes = useStyles();
  const { entity } = useEntity();
  const url = entity.metadata.annotations?.[STRUCTURIZR_ANNOTATION];

  if (!url) {
    return <MissingAnnotationEmptyState annotation={STRUCTURIZR_ANNOTATION} />;
  }

  return (
    <InfoCard title="Architecture" noPadding>
      <iframe
        className={classes.iframe}
        src={url}
        title="Structurizr"
        sandbox="allow-scripts allow-same-origin allow-popups"
        allow="fullscreen"
      />
    </InfoCard>
  );
}
