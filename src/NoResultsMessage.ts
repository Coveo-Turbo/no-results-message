import {
    Component,
    IComponentBindings,
    IQuerySuccessEventArgs,
    QueryEvents,
    ComponentOptions
} from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';

export interface NoResultsMessageOptions {
    text: string;
    tabs?: string[];
    notTabs?: string[];
}

@lazyComponent
export class NoResultsMessage extends Component {
    static ID = 'NoResultsMessage';

    static options: NoResultsMessageOptions = {
        text: ComponentOptions.buildLocalizedStringOption( { localizedString: () => 'NoResultsMessage' }),
        tabs: ComponentOptions.buildListOption({ defaultValue: [] }),
        notTabs: ComponentOptions.buildListOption({ defaultValue: [] }),
    };

    /**
     * Create a new ViewResults component
     * @param element
     * @param options
     * @param bindings
     *
     */

    constructor(public element: HTMLElement, public options: NoResultsMessageOptions, public bindings: IComponentBindings) {
        super(element, NoResultsMessage.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, NoResultsMessage, options);
        this.element.hidden = true;
        this.element.innerText = this.options.text;

        this.bind.onRootElement(QueryEvents.deferredQuerySuccess, (successEvent: IQuerySuccessEventArgs) => this.handleDeferredQuerySuccess(successEvent));
    }

    protected handleDeferredQuerySuccess(successEvent: IQuerySuccessEventArgs) {
        if (successEvent.results.totalCount > 0) {
            return this.hide();
        }

        let shouldHide = false;

        shouldHide = this.handleTabConditions(successEvent);

        if (shouldHide) {
            return this.hide();
        }

        this.show();
    }

    protected handleTabConditions(successEvent: IQuerySuccessEventArgs) {
        const tab = successEvent.query.tab;
        const { tabs, notTabs } = this.options;

        if (notTabs.length && notTabs.includes(tab)) {
            return true;
        }

        if (tabs.length && !tabs.includes(tab)) {
            return true;
        }

        return false;
    }

    protected hide() {
        this.element.hidden = true;
    }

    protected show() {
        this.element.hidden = false;
    }
};
