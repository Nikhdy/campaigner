import * as React from 'react';
import { connect } from 'react-redux';
import { setRoute } from 'app/stores/application/app.action';

interface ITemplateProps {
  setRoute: (route: string) => void;
}

class TemplatesUnwrapped extends React.Component<ITemplateProps, {}> {
  componentWillMount() {
    this.props.setRoute("TEMPLATES");
  }

  render() {
    return <div className="content-box p-0">
      <div className="row">
        <div className="col-sm-12">
          <div className="element-wrapper p-0">
            <div className="element-content">
              <div className="todo-app-w">
                <div className="todo-sidebar">
                  <div className="todo-sidebar-section">
                    <div className="todo-sidebar-section-contents">
                      <div className="todo-sidebar-section-sub-section">
                        <div className="todo-sidebar-section-sub-header">
                          <i className="os-icon os-icon-documents-11"></i>
                          <h6>Projects</h6>
                        </div>
                        <div className="todo-sidebar-section-sub-section-content">
                          <ul className="items-list">
                            <li>
                              <a href="#">App Development</a>
                            </li>
                            <li>
                              <a href="#">Movies to Watch</a>
                            </li>
                            <li>
                              <a href="#">Tasty Food Recipes</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="todo-sidebar-section-sub-section">
                        <div className="todo-sidebar-section-sub-section-toggler">
                          <i className="os-icon os-icon-ui-23"></i>
                        </div>
                        <div className="todo-sidebar-section-sub-header">
                          <i className="os-icon os-icon-ui-34"></i>
                          <h6>Notes</h6>
                        </div>
                        <div className="todo-sidebar-section-sub-section-content">
                          <ul className="items-list">
                            <li>
                              <a href="#">Server Credentials</a>
                            </li>
                            <li>
                              <a href="#">Social Connections</a>
                            </li>
                            <li>
                              <a href="#">Travel Tips</a>
                            </li>
                            <li>
                              <a href="#">John's Story</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="todo-sidebar-section-sub-section">
                        <div className="todo-sidebar-section-sub-section-toggler">
                          <i className="os-icon os-icon-ui-23"></i>
                        </div>
                        <div className="todo-sidebar-section-sub-header">
                          <i className="os-icon os-icon-ui-21"></i>
                          <h6>Tasks</h6>
                        </div>
                        <div className="todo-sidebar-section-sub-section-content">
                          <ul className="items-list">
                            <li>
                              <a href="#">Rent uhaul truck and order cardboard boxes and other moving supplies</a>
                            </li>
                            <li>
                              <a href="#">Order new set of tires from tirerack and schedule appointment</a>
                            </li>
                            <li>
                              <a href="#">Visit Home Depot to find out what is needed to rebuild backyard patio</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="todo-content">
                  <h4 className="todo-content-header">
                    <i className="os-icon os-icon-ui-83"></i>
                    <span>Next 7 Days</span>
                  </h4>
                  <div className="all-tasks-w">
                    <div className="tasks-section">
                      <div className="tasks-header-w">
                        <a className="tasks-header-toggler" href="#">
                          <i className="os-icon os-icon-ui-23"></i>
                        </a>
                        <h5 className="tasks-header">Today</h5>
                        <span className="tasks-sub-header">Mon, Sep 23th</span>
                        <a className="add-task-btn" data-target="#taskModal" data-toggle="modal" href="#">
                          <i className="os-icon os-icon-ui-22"></i>
                          <span>Add Task</span>
                        </a>
                      </div>
                      <div className="tasks-list-w">
                        <div className="tasks-list-header">High Priority</div>
                        <ul className="tasks-list">
                          <li className="draggable-task danger">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Visit Home Depot to find out what is needed to rebuild backyard patio</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="draggable-task warning">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Order new drills from amazon sale box</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="draggable-task complete">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Rent uhaul truck and order cardboard boxes and other moving supplies</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="tasks-list-header">Low Priority</div>
                        <ul className="tasks-list">
                          <li className="draggable-task complete">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Make sure car oil level is checked</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="draggable-task complete">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Order new set of tires from tirerack and schedule appointment</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tasks-section">
                      <div className="tasks-header-w">
                        <a className="tasks-header-toggler" href="#">
                          <i className="os-icon os-icon-ui-23"></i>
                        </a>
                        <h5 className="tasks-header">Tomorrow</h5>
                        <span className="tasks-sub-header">Tue, Sep 24th</span>
                        <a className="add-task-btn" data-target="#taskModal" data-toggle="modal" href="#">
                          <i className="os-icon os-icon-ui-22"></i>
                          <span>Add Task</span>
                        </a>
                      </div>
                      <div className="tasks-list-w">
                        <ul className="tasks-list">
                          <li className="draggable-task danger">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Visit Home Depot to find out what is needed to rebuild backyard patio</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                            <div className="todo-task-media">
                              <img src="img/portfolio9.jpg" />
                              <img src="img/portfolio2.jpg" />
                              <img src="img/portfolio12.jpg" />
                            </div>
                          </li>
                          <li className="draggable-task warning">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Order new drills from amazon sale box</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="draggable-task complete">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Make sure car oil level is checked</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="draggable-task success favorite">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Order new set of tires from tirerack and schedule appointment</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="draggable-task complete">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Rent uhaul truck and order cardboard boxes and other moving supplies</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tasks-section">
                      <div className="tasks-header-w">
                        <a className="tasks-header-toggler" href="#">
                          <i className="os-icon os-icon-ui-23"></i>
                        </a>
                        <h5 className="tasks-header">Wednesday</h5>
                        <span className="tasks-sub-header">Wed, Sep 25th</span>
                        <a className="add-task-btn" data-target="#taskModal" data-toggle="modal" href="#">
                          <i className="os-icon os-icon-ui-22"></i>
                          <span>Add Task</span>
                        </a>
                      </div>
                      <div className="tasks-list-w">
                        <ul className="tasks-list">
                          <li className="draggable-task danger">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Make sure car oil level is checked</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="draggable-task success">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Order new set of tires from tirerack and schedule appointment</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="draggable-task complete">
                            <div className="todo-task-drag drag-handle">
                              <i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
                            </div>
                            <div className="todo-task">
                              <span>Rent uhaul truck and order cardboard boxes and other moving supplies</span>
                              <div className="todo-task-buttons">
                                <a className="task-btn-done" href="#">
                                  <span>Mark as Complete</span>
                                  <i className="os-icon os-icon-ui-21"></i>
                                </a>
                                <a className="task-btn-edit" data-target="#taskModal" data-toggle="modal" href="#">
                                  <span>Edit</span>
                                  <i className="os-icon os-icon-ui-49"></i>
                                </a>
                                <a className="task-btn-delete" href="#">
                                  <span>Delete</span>
                                  <i className="os-icon os-icon-ui-15"></i>
                                </a>
                                <a className="task-btn-star" href="#">
                                  <span>Favorite</span>
                                  <i className="os-icon os-icon-ui-02"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setRoute: (route: string) => dispatch(setRoute(route)),

  }
}
const mapStateToProps = (state) => {
  return {

  }
}
export const Templates = connect(mapStateToProps, mapDispatchToProps)(TemplatesUnwrapped)