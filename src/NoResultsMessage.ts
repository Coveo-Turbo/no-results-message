import {
    Component,
    Initialization,
    IComponentBindings,
    IQuerySuccessEventArgs,
    QueryEvents,
    ComponentOptions,
    Dom,
} from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';

export interface NoResultsMessageOptions {
    text: string;
}

@lazyComponent
export class NoResultsMessage extends Component {
  static ID = 'NoResultsMessage';

  static options: NoResultsMessageOptions = {
      text: ComponentOptions.buildStringOption(),
  };

  protected container: Dom;

  /**
   * Create a new ViewResults component
   * @param element
   * @param options
   * @param bindings
   *
   */

  constructor(public element: HTMLElement, public options: NoResultsMessageOptions, public bindings: IComponentBindings) {
    super(element, NoResultsMessage.ID, bindings);
    this.options = Coveo.ComponentOptions.initComponentOptions(element, NoResultsMessage, options);
    this.element.hidden = true;
    this.element.innerText = this.options.text;

    this.bind.onRootElement(QueryEvents.deferredQuerySuccess, (successEvent: IQuerySuccessEventArgs) => this.handleDeferredQuerySuccess(successEvent));
  }

  protected handleDeferredQuerySuccess(successEvent: IQuerySuccessEventArgs) {
    // No results from query

    if (successEvent.results.totalCount == 0) { 
      this.element.hidden = false;
    }
    else {
      this.element.hidden = true;
    }
  }
};
